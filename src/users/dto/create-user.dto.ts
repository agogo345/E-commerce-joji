export class CreateUserDto {
  username: string;
  password: string;
  email: string;
  phoneNumber?: string;
  address?: string;
}