import InputELabel from "./InputELabel"

const Cadastro = () => {
    return (
        <div>
        {/* 1. Nome
        2. Data de Nascimento
        3. Nome do Responsável pela criança
        4. Telefone de Contato do Responsável pela criança
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
                {/* <InputELabel forName="emergencia" type="select" label="Em caso de emergência avisar" /> */}
            </form>
        </div>
    )
}

export default Cadastro