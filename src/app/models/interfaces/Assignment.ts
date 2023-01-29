import { IEmployee } from "./Employee";

export interface IAssignment {
    id: string;
    name: string;
    // agreementId: string;
    // agreemntName: string;
    // externalId: string;
    external: IEmployee;
    startDate: string;
    endDate: string;
    something: boolean;
}
