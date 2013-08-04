

var $Elevator = (function (my, undefined) {

    var up_queue = [], down_queue = [], status, current_stage = 0, speed = 1000,
        UP = 1, DOWN = 2, IDLE = 0, stage_history = {};

    my = {
        init: function (cur_stage, new_speed, up_q, down_q) {
            up_queue = up_q; 
            down_queue = down_q;
            current_stage = cur_stage;
            speed = new_speed;
        },

        operation_handler: function (prep_status, from_stage) {
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

            this.elevator_handler();
        }, 

        elevator_handler: function () {
            var up_head, down_head, diff_stage;
            if (up_queue.length === 0 && down_queue.length === 0) {
                status = IDLE;
                // implement the smart elevator
            }

            up_head = up_queue[0];
            down_head = down_queue[0];

            if (up_head) {
                diff_stage = Math.abs(current_stage - up_head);
            }

            if (down_head) {
                diff_stage = Math.abs(current_stage - down_head) - diff_stage;
            }

            if (diff_stage >= 0) {
                status = UP;
                up_queue.sort();
            } else {
                status = DOWN;
                down_queue.sort()
            }
        }
    }

})($Elevator || {});