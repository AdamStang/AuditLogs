import { CostAllocationEnum } from "../models/enums/CostAllocation.enum";
import { VendorTypeEnum } from "../models/enums/VendorType.enum";
import { IAgreement } from "../models/interfaces/Agreement";
import { IAssignment } from "../models/interfaces/Assignment";
import { ICostCenter } from "../models/interfaces/CostCenter";
import { IEmployee } from "../models/interfaces/Employee";
import { ILocation } from "../models/interfaces/Location";
import { IVendor } from "../models/interfaces/Vendor";

export class Arrays {
    locations: ILocation[] = [
        {id: "111", city: "Zurich", country: "Switzerland", state: "", address: "Abcd 123"},
        {id: "112", city: "Bern", country: "Switzerland", state: "", address: "Abcd 234"},
        {id: "113", city: "Bratislava", country: "Slovakia", state: "", address: "Abcd 345"},
        {id: "114", city: "Warszava", country: "Poland", state: "", address: "Abcd 456"},
        {id: "115", city: "Budapest", country: "Hungary", state: "", address: "Abcd 567"},
        {id: "116", city: "Vien", country: "Austria", state: "", address: "Abcd 678"},
    ];

    costCenters: ICostCenter[] = [
        {id: "211", name: "Cost Center 1", location: this.locations[0]},
        {id: "212", name: "Cost Center 2", location: this.locations[1]},
        {id: "213", name: "Cost Center 3", location: this.locations[2]},
        {id: "214", name: "Cost Center 4", location: this.locations[3]},
        {id: "215", name: "Cost Center 5", location: this.locations[4]},
        {id: "216", name: "Cost Center 6", location: this.locations[5]},
    ];

    employees: IEmployee[] = [
        {id: "311", firstName: "Pavol", lastName: "Uzky", fullName: "Pavol Uzky"},
        {id: "312", firstName: "Peter", lastName: "Siroky", fullName: "Peter Siroky"},
        {id: "313", firstName: "Jozko", lastName: "Mrkvicka", fullName: "Jozko Mrkvicka"},
        {id: "314", firstName: "Ferko", lastName: "Hrablicka", fullName: "Ferko Hrablicka"},
        {id: "315", firstName: "Juraj", lastName: "Nizky", fullName: "Juraj Nizky"},
        {id: "316", firstName: "Roman", lastName: "Vysoky", fullName: "Roman Vysoky"},
    ];

    vendors: IVendor[] = [
        {id: "411", name: "Vendor 1", vendorGroup: "Vendor Group 1"},
        {id: "412", name: "Vendor 2", vendorGroup: "Vendor Group 2"},
        {id: "413", name: "Vendor 3", vendorGroup: "Vendor Group 3"},
        {id: "414", name: "Vendor 4", vendorGroup: "Vendor Group 4"},
        {id: "415", name: "Vendor 5", vendorGroup: "Vendor Group 5"},
        {id: "416", name: "Vendor 6", vendorGroup: "Vendor Group 6"},
    ];

    assignments: IAssignment[] = [
        {id: "511", name: "Assignemnt 1", external: this.employees[0], startDate: "01.01.2022", endDate: "01.01.2023", something: false},
        {id: "512", name: "Assignemnt 2", external: this.employees[1], startDate: "01.01.2022", endDate: "01.01.2023", something: true},
        {id: "513", name: "Assignemnt 3", external: this.employees[2], startDate: "01.01.2022", endDate: "01.01.2023", something: true},
        {id: "514", name: "Assignemnt 4", external: this.employees[3], startDate: "01.01.2022", endDate: "01.01.2023", something: false},
        {id: "515", name: "Assignemnt 5", external: this.employees[4], startDate: "01.01.2022", endDate: "01.01.2023", something: true},
        {id: "516", name: "Assignemnt 6", external: this.employees[5], startDate: "01.01.2022", endDate: "01.01.2023", something: false},
    ];

    agreements: IAgreement[] = [
        {id: "611", name: "Agreement 1", startDate: "01.01.2022", endDate: "01.01.2023", costCenter: this.costCenters[0], costAllocation: CostAllocationEnum.Billable, vendor: this.vendors[0], vendorType: VendorTypeEnum.Vendor, vendorRepresentative: this.employees[0], assignments: [], comment: ""},
        {id: "611", name: "Agreement 1", startDate: "01.01.2022", endDate: "01.01.2023", costCenter: this.costCenters[0], costAllocation: CostAllocationEnum.Billable, vendor: this.vendors[0], vendorType: VendorTypeEnum.VendorLater, vendorRepresentative: this.employees[0], assignments: [this.assignments[0]], comment: ""},
        {id: "611", name: "Agreement 1", startDate: "01.01.2022", endDate: "01.01.2023", costCenter: this.costCenters[0], costAllocation: CostAllocationEnum.Billable, vendor: this.vendors[0], vendorType: VendorTypeEnum.Vendor, vendorRepresentative: this.employees[0], assignments: [this.assignments[0], this.assignments[1]], comment: ""},
        {id: "611", name: "Agreement 1", startDate: "01.01.2022", endDate: "01.01.2023", costCenter: this.costCenters[0], costAllocation: CostAllocationEnum.Billable, vendor: this.vendors[0], vendorType: VendorTypeEnum.Vendor, vendorRepresentative: this.employees[0], assignments: [this.assignments[0], this.assignments[1], this.assignments[2]], comment: ""},
        {id: "611", name: "Agreement 1", startDate: "01.01.2022", endDate: "01.01.2023", costCenter: this.costCenters[0], costAllocation: CostAllocationEnum.Billable, vendor: this.vendors[0], vendorType: VendorTypeEnum.Vendor, vendorRepresentative: this.employees[0], assignments: [this.assignments[0], this.assignments[1], this.assignments[2]], comment: "Bla bla"},
        {id: "611", name: "Agreement 1", startDate: "01.01.2022", endDate: "01.01.2023", costCenter: this.costCenters[0], costAllocation: CostAllocationEnum.Billable, vendor: this.vendors[0], vendorType: VendorTypeEnum.Vendor, vendorRepresentative: this.employees[0], assignments: [this.assignments[0]], comment: "Bla bla"},
    ];
}
