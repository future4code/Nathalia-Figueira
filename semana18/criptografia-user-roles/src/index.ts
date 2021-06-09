import app from "./services/app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login";
import { compareHash, createHash,} from "./services/hashManager";

app.post('/user/signup', createUser);
app.post('/user/login', login);
app.put('/user/edit/', editUser);

const hash1 = createHash("senha")
const hash2 = createHash("senha")

const compare1 = compareHash("senha", hash1)

 console.log({hash1, hash2, compare1});