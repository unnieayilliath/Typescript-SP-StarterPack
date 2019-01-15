import {ListService} from "../services/listservice";
export class ListController {
static TestMethod():void {
console.log("This works!");
console.log(ListService.TestMethod("new test"));
}
}
ListController.TestMethod();