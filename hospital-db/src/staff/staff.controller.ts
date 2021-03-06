import { Controller, Get, Param, Post, Body, Patch, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.entity';
import { CreateStaffDTO } from './dto/create-staff.dto';
import { UpdateStaffDTO } from './dto/update-staff.dto';
import { StaffDTO } from './dto/staff.dto';

@Controller('staff')
export class StaffController {
  /**
   * First method
   * @param staffService controller for the staff service
   */
  constructor(private staffService: StaffService) {}

  /**
   * Get one staff by dni
   * @param dni of the staff
   */
  @Get('/:dni')
  getStaffByDni(@Param('dni') dni: string): Promise<StaffDTO> {
    return this.staffService.getStaffByDni(dni);
  }
  /**
   * Get all the staff
   */
  @Get()
  getAllStaff(): Promise<StaffDTO[]> {
    return this.staffService.getAllStaff();
  }
  /**
   * Create a new member of the staff
   * @param createStaffDTO data of the staff
   */
  @Post()
  @UsePipes(ValidationPipe)
  createStaff(@Body() createStaffDTO: CreateStaffDTO): Promise<Staff> {
    return this.staffService.createStaff(createStaffDTO);
  }
  /**
   * Update the data of the member
   * @param dni of the staff
   * @param updateStaffDTO data of the member of the staff
   */
  @Patch('/edit/:dni')
  editStaff(
    @Param('dni') dni: string,
    @Body() updateStaffDTO: UpdateStaffDTO,
  ): Promise<Staff> {
    return this.staffService.updateStaff(dni, updateStaffDTO);
  }
  /**
   * Delete the member of the staff
   * @param dni of the member
   */
  @Delete('/:dni')
  deleteStaff(@Param('dni') dni: string): void {
    this.staffService.deleteStaff(dni);
  }
   /**
     * Login
     */
    @Post('/login')
    login( @Body() credentials: string): Promise<Staff> {
        console.log('login', credentials['dni'],' pass ',credentials['password'])
        return this.staffService.login(credentials['dni'], credentials['password']);
    }
}
