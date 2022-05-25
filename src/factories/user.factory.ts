// https://github.com/w3tecch/typeorm-seeding
import { define } from 'typeorm-seeding';
// 使えないので、fakerの代用を使うようにする
// import Faker from 'faker';
import { User } from '../../src/entities/user.entity';

define(User, (faker: typeof Faker): User => {
    const user = new User();
　　　　　//↓ライブラリ「faker」でランダムなデータを作成する
        user.username = faker.internet.username();
        user.email = faker.internet.email();
        user.password = faker.internet.password();

    return user;
});

export default User;