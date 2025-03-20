### TODO

- [x] Estrutura inicial do Formulário
- [x] Formulário funcional
- [x] Resolver problema de navegação usando os caminhos da estrutura do projeto
- [x] Modelagem de dados e banco
- [x] Integrar implementações do "playground" à rota principal
- [x] Corrigir desaparecimento do campo "qualidade" do FormData durante submissão quando deveria ser undefined ou null
- [x] Fix buggy form responses
- [x] Verificar transições do formModal ao submeter o form
- [ ] Registro de timestamps nos reviews
- [ ] Relatórios diários, mensais, anuais (web/pdf/dashboard?)
- [ ] Implementação de backup de dados em cloud storage (?)
- [ ] Gerenciamento do db (acesso administrativo para leitura/backup/migração)
- [] ~~Adicionar efeito de preenchimento ao hover dos ícones estrelas~~
- [] ~~Gerador de Relatórios (jsPDF)~~

### Modelo de Relatório

RU UFPE
Relatório Diário/Mensal/Anual - DD/MM/AA

Gráfico + Resultado CSAT:
- **[CSAT %]** Evolução mensal/anual [Qualidade da refeição x Dia (+Contagem)] + Média mensal de cada nível de satisfação

Gráficos em barra (média geral, % e quantidades dos itens respondidos)
- Qualidade da sua refeição hoje
- Cordialidade da equipe
- Apresentação dos pratos
- Temperatura dos alimentos
- Sabor/tempero dos alimentos
- Limpeza/higiene em geral
- Opiniões (exibir até 3 comentários recentes dos níveis Ruim, Regular e Excelente)