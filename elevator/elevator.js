

var $Elevator = (function (my, undefined) {

  var up_queue = [], down_queue = [], process_queue = [], status, current_stage = 0, speed = 1000,
    UP = 1, DOWN = -1, IDLE = 0, stage_history = {};

  my = {
    init: function (cur_stage, new_speed, up_q, down_q) {
      up_queue = up_q; 
      down_queue = down_q;
      current_stage = cur_stage;
      speed = new_speed;
    },

    operation_handler_source: function (prep_status, from_stage) {
      if (prep_status === UP) {
        up_queue.push(from_stage);
        up_queue.sort();
        if (!stage_history[from_stage]) {
          stage_history[from_stage] = 1;
        } else {
          stage_history[from_stage] += 1;
        }
        // up_queue.sort();
      } else if (prep_status === DOWN) {
        down_queue.push(from_stage);
        down_queue.sort(function (a, b) { return b - a; });
        if (!stage_history[from_stage]) {
          stage_history[from_stage] = 1;
        } else {
          stage_history[from_stage] += 1;
        }
      }
			
			console.log(prep_status, from_stage, up_queue, down_queue);
			my.elevator_handler();
    },
		
		operation_handler_destination: function (dest) {
			if (status !== IDLE) {
				if (dest > current_stage) {
					up_queue.push(dest);
					up_queue.sort();
				}
				
				if (dest < current_stage) {
					down_queue.push(dest);
					down_queue.sort(function (a, b) {return b - a;});
				}
			}
			
			
		},

    elevator_handler: function () {
      var up_head, down_head;
	      if (up_queue.length === 0 && down_queue.length === 0) {
	        status = IDLE;
	        // implement the smart elevator
					return true;
	      }
		
				if (status === IDLE && up_queue.length > 0 && down_queue.length === 0) {
					status = UP;
				}
			
				if (status === IDLE && down_queue.length > 0 && up_queue.length === 0) {
					status = DOWN;
				}
			
				if (status === IDLE && down_queue.length > 0 && up_queue.length > 0) {
					if (Math.abs(down_queue[0] - current_stage) > Math.abs(up_queue[0] - current_stage)) {
						status = UP;
					} else {
						status = DOWN;
					}
				}
			
				if (status === UP) {
				  my.elevator_go_up();
				} else if (status === DOWN) {
				  my.elevator_go_down();
				}
	      
      
    },
		
		elevator_go_up: function () {
			var i;
		  for (i = 0; i < up_queue.length; i += 1) {
				up_head = up_queue[i];
		  	if (up_head >= current_stage) {
		  		process_queue.push(up_head);
					process_queue.sort();
					up_queue.splice(i, 1);
					break;
		  	}
		  }
			
			if (i === up_queue.length) { // top of up_queue, retrun
				if (down_queue.length > 0 || up_queue.length > 0) {
					status = DOWN;
				} else {
					status = IDLE;
				}
				
			}
		},
		
		elevator_go_down: function () {
		  for (i = 0; i < down_queue.length; i += 1) {
				down_head = down_queue[i];
		  	if (down_head <= current_stage) {
		  		process_queue.push(down_head);
					process_queue.sort(function (a, b) {return b - a;});
					down_queue.splice(i, 1);
					break;
		  	}
		  }
			
			if (i === down_queue.length) {	
				if (up_queue.length > 0 || down_queue.length > 0) {
					if (i === 0) {
						process.push(up_queue[0]);
						process
					}
					status = UP;
				} else {
					status = IDLE;
				}
			}
		},
		
		process_elevator: function () {
			setTimeout(function () {
				var to_stage;
				if (process_queue.length > 0) {
					to_stage = process_queue.shift();
				}
				
				if (current_stage < to_stage) {
					current_stage += 1;
				} else if (current_stage > to_stage) {
					current_stage -= 1;
				}
				
				my.process_elevator();
			}, speed);
		}, 
		
		get_process_queue: function () {
			return process_queue;
		}
  }
	
	return my;

})($Elevator || {});


window.onload = function () {
	
	var elevator = document.getElementById('elevator'), UP = 1, DOWN = -1, IDLE = 0, 
			keyboard = document.getElementById('keyboard'), 
			show_process = document.getElementById('processQ');
			
	$Elevator.process_elevator();
	$Elevator.elevator_handler();
	show_process.innerHTML = $Elevator.get_process_queue().join(' ');
	
	if (elevator) {
		elevator.addEventListener('click', function (e) {
			var t = e.target, floor, regexp_get_num = /\d+/;
			if (t.innerHTML === 'up') {
				floor = regexp_get_num.exec(t.parentNode.innerText)[0];
				floor = parseInt(floor, 10);
				$Elevator.operation_handler_source(UP, floor);
			} else {
				floor = regexp_get_num.exec(t.parentNode.innerText)[0];
				floor = parseInt(floor, 10);
				$Elevator.operation_handler_source(DOWN, floor);
			}
		})
	}
	
	if (keyboard) {
		keyboard.addEventListener('click', function (e) {
			var t = e.target, to_stage;
			to_stage = parseInt(e.target.innerText, 10);
			
			$Elevator.operation_handler_destination(to_stage);
		})
	}
	
	
}












