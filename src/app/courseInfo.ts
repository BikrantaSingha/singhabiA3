
export class Course {
	ccode: string;
	ctitle: string;
	cday: string;
	cprofessor: string;

	constructor(ccode:string, ctitle:string, cday:string, cprofessor:string){
		this.ccode = ccode;
		this.ctitle = ctitle;
		this.cday = cday;
		this.cprofessor = cprofessor;
	}
}