import { Router } from 'express';
import Userscontroller from './Controllers/Userscontroller';
import Clientescontroller from './Controllers/Clientescontroller';
import Cortescontroller from './Controllers/Cortescontroller';
import Pagsegurocontroller from './Controllers/Pagsegurocontroller';
import Clientesatendidoscontroller from './Controllers/Clientesatendidoscontroller';
import Stripecontroller from './Controllers/Stripecontroller';
import SessionUserController from './Controllers/SessionUserController';
import Webhookcontroller from './Controllers/Endpointstripe'

const route = new Router();

route.post('/usuarios', Userscontroller.post)
route.get('/usuarios', Userscontroller.get)
route.get('/categoria', Userscontroller.get2)
route.delete('/usuarios/:_id', Userscontroller.delete)
route.put('/usuarios/:_id', Userscontroller.update)


route.get('/clientes', Clientescontroller.get2)
route.get('/idSalao', Clientescontroller.get)
route.post('/clientes', Clientescontroller.post)
route.put('/clientes/:_id', Clientescontroller.updade)
route.delete('/clientes/:_id', Clientescontroller.delete)

route.get('/idsalaocorte', Cortescontroller.get2)
route.get('/cortes', Cortescontroller.get)
route.get('/cortes', Cortescontroller.get3)
route.post('/cortes', Cortescontroller.post)
route.put('/cortes/:_id', Cortescontroller.update)
route.delete('/cortes/:_id', Cortescontroller.del)


route.post('/pagseguro', Pagsegurocontroller.post)


route.post('/clientesatendidos', Clientesatendidoscontroller.post)
route.get('/idsalaoclienteatendido', Clientesatendidoscontroller.get)
route.get('/clientesatendidos', Clientesatendidoscontroller.get2)

route.post('/assinar', Stripecontroller.post)
route.get('/assinar', Stripecontroller.get)


route.post('/session', SessionUserController.post)
route.get('/session', SessionUserController.get)
route.delete('/session/:_iduser', SessionUserController.delete)


route.post('/webhoks', Webhookcontroller.post)

export default route;
