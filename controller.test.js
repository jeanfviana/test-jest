const { spy, assert } = require('sinon')
const { Database } = require('./database')
const { UsuariosController } = require('./controller')

describe('Controller de Usuários', () => {
    it('fake', () => {
        const respostaEsperada = [
            {
                id: 10,
                nome: 'João Carlos',
                email: 'jeanfviana@gmail.com'

            }
        ]

        const fakeDatabase = {
            findAll(){
                return respostaEsperada
            }
        }
        const controller = new UsuariosController(fakeDatabase)
        const response = controller.getAll()

        expect(response).toBe(respostaEsperada)
    });

    it('spy', () => {
        const findAll = spy(Database, 'findAll')
        const controller = new UsuariosController(Database)
        controller.getAll()

        assert.calledWith(findAll, 'usuarios')
    });

});