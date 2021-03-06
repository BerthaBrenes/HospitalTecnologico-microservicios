import { IsNotEmpty, IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicalRecordDTO {
  /**
   * Date the medical procedure was performed
   */
  @ApiProperty({
    example: '2020-07-15',
    description: 'Date the medical procedure was performed.'
  })
  @IsNotEmpty()
  @IsDate()
  date: Date;
  
  /**
   * UUID code of the procedure performed on the patient.
   */
  @ApiProperty({
    example: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
    description: 'UUID code of the procedure performed on the patient.'
  })
  @IsNotEmpty()
  @IsString()
  procedure_id: string;
  
  /**
   * National Identity Document (DNI) of the patient
   */
  @ApiProperty({
    example: '1-2756-1922',
    description: 'National Identity Document (DNI) of the patient.'
  })
  @IsNotEmpty()
  @IsString()
  patient_dni: string;

  /**
   * Prescribed medical treatment.
   */
  @ApiProperty({
    example: '10ml de mucosulvan compuestp  cada 8 horas.',
    description: 'Prescribed medical treatment.'
  })
  @IsString()
  treatment: string;

}