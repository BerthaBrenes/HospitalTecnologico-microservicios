import { Injectable, NotFoundException } from '@nestjs/common';
import { MedicalEquipmentRepository } from './medical-equiment.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalEquipmentDTO } from './dto/medicalEquimentDTO';
import { MedicalUpdateEquipmentDTO } from './dto/medicalUpdateDTO';

@Injectable()
export class MedicalEquipmentService {
    constructor(
        @InjectRepository(MedicalEquipmentRepository)
        private medicalRepository: MedicalEquipmentRepository){}
    /**
     * Create a new medical equipment
     * @param data data of the equipment
     */
    createEquipment(data: MedicalEquipmentDTO){
        return this.medicalRepository.createMedicalEquipment(data);
    }
    /**
     * Get all the medical equipment
     */
    async getAllEquipments(){
        return await this.medicalRepository.find();
    }
    /**
     * Get one equipment
     * @param idEq id of the equipment
     */
    async getOneEquipment(idEq: string){
        const found = await this.medicalRepository.findOne(idEq);
        if(!found){
            throw new NotFoundException(`El equipo con el id ${idEq} no se encuentra`);
        }
        return found;
    }
    /**
     * Update the data of an equipment
     * @param idEq id of the equipment
     * @param dataEq data of the equipment
     */
    async updateEquipment(idEq: string, dataEq: MedicalUpdateEquipmentDTO){
        const equipment = await this.getOneEquipment(idEq);
        const { Provider, Qty} = dataEq;
        equipment.provider = Provider;
        equipment.qty = Qty;
        return await equipment.save();
    }
}
