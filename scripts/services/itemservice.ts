import pnp from "@pnp/pnpjs";
export class ItemService {
    // tslint:disable-next-line:no-empty
    constructor() {
    }
    static TestMethod(value: string):string {
            console.log(value);
            // this is needed if we are going with complete aspx in a library model and not with content editor model
            pnp.setup({ 
                sp: {
                    baseUrl:"https://ecm.dev.opcw.org/sites/OSDTemplate"
                }
             });
             pnp.sp.web.get().then(w => {
                console.log(w.Title);
            });
            return `Hello there ${value}`;
    }
}
