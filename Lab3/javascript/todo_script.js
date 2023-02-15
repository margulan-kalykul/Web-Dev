var numOfTasks = 0;

            function taskDone(check) {
                const taskID = check.id.substring(6);
                const task = document.getElementById("text-" + taskID);
                if (check.value == "off") {
                    task.style = "text-decoration: line-through";
                    check.value = "on";
                }
                else {
                    task.style = "text-decoration: none";
                    check.value = "off";
                }
            }

            function taskDelete(del) {
                const taskID = del.id.substring(4);
                const task = document.getElementById("task-" + taskID);
                task.remove();
            }

            function fillTask(task, curTask) {
                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.setAttribute("onchange", "taskDone(this)");
                checkbox.name = "task is done checkbox";
                checkbox.value = "off";
                checkbox.className = "task-checkbox";
                checkbox.id = "check-" + numOfTasks;

                const textOfTask = document.createElement("p");
                textOfTask.className = "task-text";
                textOfTask.id = "text-" + numOfTasks;
                textOfTask.appendChild(document.createTextNode(task));
                
                const binButton = document.createElement("button");
                binButton.id = "bin-" + numOfTasks;
                binButton.className = "delete-button";
                const binImage = document.createElement("img");
                binImage.src = "images/bin-icon.jpg";
                binImage.alt = "trash bin icon";
                binImage.className = "bin-icon";
                binButton.appendChild(binImage);
                binButton.setAttribute("onclick", "taskDelete(this)");

                curTask.appendChild(checkbox);
                curTask.appendChild(textOfTask);
                curTask.appendChild(binButton);
                curTask.id = "task-" + numOfTasks;
            }

            function addTask(task) {
                numOfTasks++;

                const newTask = document.createElement("div");
                newTask.className = "task";

                fillTask(task, newTask);

                let lastElement = document.getElementById("end-of-page");
                
                document.body.insertBefore(newTask, lastElement);
            }

            function getForm() {
                let addedTask = document.getElementById("new-task-input").value;

                if (addedTask.length > 0) {
                    document.getElementById("new-task-input").value = '';
                    addTask(addedTask);
                }
            }