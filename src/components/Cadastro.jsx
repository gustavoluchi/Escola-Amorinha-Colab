import InputELabel from "./InputELabel"
import Select from './Select';

const Cadastro = () => {

    const opcoes = [
        {
            value: 'pais',
            label: "Pais"
        },
        {
            value: 'tios',
            label: "Tios"
        },
        {
            value: 'avos',
            label: "Avós"
        },
        {
            value: 'padrinhos',
            label: "Padrinhos"
        }
    ]

    return (
        <div>
            {/* 
        
        5. Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos) (só o check box? pode ter um checkbox outros
        6. Telefone para Emergências
        7. Possui Restrição Alimentar
        8. Descrição das Restrições Alimentares
        9. Autorização de fotos e vídeos da criança para uso escolar
        10. Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia
        11. Turma
        12. Observações adicionais */}
            cadastro

            <form>
                <InputELabel forName="nome" label="Insira o nome da criança/aluno" />
                <InputELabel forName="dataDeNascimento" type="date" label="Insira a data de nascimento da criança" />
                <InputELabel forName="responsavel" label="Insira o nome do Responsável pela criança" />
                <InputELabel forName="telefone" label="Telefone de Contato do Responsável pela criança" />
                <Select forName="emergencia" label="Em caso de emergência avisar"
                    options={opcoes} />
            </form>
        </div>
    )
}

export default Cadastro