import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.css']
})
export class ReadExcelComponent implements OnInit {
    jsonData: any[] = [];

  onFileChange(event: any): void {
    const target: DataTransfer = <DataTransfer>(event.target);

    if (target.files.length !== 1) {
      console.error('Solo se permite un archivo');
      return;
    }

    const file: File = target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const binaryStr: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });

      const sheetName: string = workbook.SheetNames[0];
      const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

      this.jsonData = XLSX.utils.sheet_to_json(sheet, { defval: '' }); // defval evita valores undefined
      console.log(this.jsonData);
    };

    reader.readAsBinaryString(file);
  }


  objectKeys(obj: any): string[] {
  return Object.keys(obj);
}


  constructor() { }

  ngOnInit(): void {
  }

}
