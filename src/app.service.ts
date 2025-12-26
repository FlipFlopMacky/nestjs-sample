import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    // test2
    return 'Hello World!'
  }
}
