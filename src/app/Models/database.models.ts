type GUID = string & { isGuid: true};
function guid(guid: string) : GUID {
    return  guid as GUID;
}

//Patient Table
export interface Patient{
    patientId:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    phone:string;
    gender:string;
    dateOfBirth:string;
    city:string;
    state:string;
    zipcode:string
    bloodGroup:string;
}

//Health History Table
export interface HealthHistory {
    hhId:string;
    patientId:string;
    date:string;
    doctorName:string;
    diagnosis:string;
    appointmentId:string;
}

//Prescription Table

export interface Prescription{
    prescriptionId:GUID;
    hhId:GUID;
    medicineName:string;
    dosage:string;
    note:string;
}

//Doctor table
export interface Doctor{
    doctorId:string;
    doctorName:string;
    email:string;
    qualification:string;
    department:string;
}


//Availability Table
export interface PhysicianAvailabilityStatus{
    availabilityId :string;
    doctorId:string;
    sunday:boolean;
    monday:boolean;
    tuesday:boolean;
    wednesday:boolean;
    thursday:boolean;
    friday:boolean;
    saturday:boolean;
}

//Appointment Table
export interface Appointment{
    appointmentId:string;
    patientId :string;
    doctorId :string;
    date :string;
    doctorName:string;
    concerns:string;
    status:string;
    checkupStatus :boolean;
}

//PatientIntialCheckup Table 

export interface PatientIntialCheckup{
    picId :string;
    appointmentId :string;
    height :number;
    weight :number;
    temperature :number;
    spo2 :number;
    bloodPressure :string;
    sugarLevel :number;
    additionalDetails :string;
    
}

//Allergy Table 
export interface Allergy{
    allergyId :string;
    allergyName :string;
    appointmentId :string;
}

//Audit Table

export interface Audit{
    
  patientEmail: string;
  patientnameFirstName: string;
  patientnameLastName: string;
  date: string;
  doctorName: string;
  dignosis: string;
  height: number;
  weight: number;
  temperature: number;
  spo2: number;
  bloodPressure: string;
  sugarLevel: number;
  additioanlDetails: string;
  allergies: string;

}