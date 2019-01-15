import {ListService} from "../services/listservice";
export class ItemController {
static TestMethod():void {
console.log("This works!");
console.log(ListService.TestMethod("new test"));
}
}
ItemController.TestMethod();