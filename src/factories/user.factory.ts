import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';

import { User } from './entities/User';

define(User, (faker: typeof Faker): User => {
    const user = new User();
　　　　　//↓ライブラリ「faker」でランダムなデータを作成する
        user.username = faker.internet.username();
        user.email = faker.internet.email();
        user.password = faker.internet.password();

    return user;
});

export default User;