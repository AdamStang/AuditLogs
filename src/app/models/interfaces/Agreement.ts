import { CostAllocationEnum } from "../enums/CostAllocation.enum";
import { VendorTypeEnum } from "../enums/VendorType.enum";
import { IAssignment } from "./Assignment";
import { ICostCenter } from "./CostCenter";
import { IEmployee } from "./Employee";
import { IVendor } from "./Vendor";

export interface IAgreement {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    assignments: IAssignment[];
    costCenter: ICostCenter;
    vendor: IVendor;
    vendorType: VendorTypeEnum;
    comment: string;
    costAllocation: CostAllocationEnum;
    vendorRepresentative: IEmployee;
}
