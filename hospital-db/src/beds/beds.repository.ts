import { Repository, EntityRepository } from 'typeorm';
import { Bed } from './beds.entity';
import { BedDTO } from './dto/beds.dto';

@EntityRepository(Bed)
export class BedsRepository extends Repository<Bed> {
  /**
   * Create a bed
   */
  async createBed(BedData: BedDTO) {
    const { UCI, RoomID, EquipmentID } = BedData;
    const bed = new Bed();

    bed.uci = UCI;
    bed.room_ = RoomID;
    bed.equipment = EquipmentID;
    console.log('new Bed', bed);
    return await bed.save();
  }
}
