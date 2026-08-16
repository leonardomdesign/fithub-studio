# Plano para Criação do Website da Academia

Este plano descreve a implementação de um website funcional e informativo para uma academia, utilizando TanStack Start, React 19, Tailwind CSS v4 e Lovable Cloud para o backend (banco de dados e autenticação).

## Objetivos
*   Criar uma página inicial impactante com diferenciais e Call to Action (CTA).
*   Implementar seções para Planos, Horários de Aulas e Galeria.
*   Criar uma página de contato com formulário.
*   Garantir design responsivo e navegação fluida.
*   Configurar persistência de dados via Lovable Cloud (ex: formulário de contato, horários de aulas).

## Estrutura do Site
*   **Home (`/`):** Hero section, Diferenciais (Por que escolher a gente?), Seção de Planos (previa), Newsletter/Footer.
*   **Modalidades (`/modalidades`):** Lista de atividades oferecidas (Musculação, CrossFit, Yoga, etc.) com descrições.
*   **Horários (`/horarios`):** Tabela dinâmica ou lista de horários semanais.
*   **Galeria (`/galeria`):** Grid de fotos das instalações.
*   **Contato (`/contato`):** Endereço, mapa (placeholder), telefone, e-mail e formulário.

## Detalhes Técnicos
*   **Framework:** TanStack Start v1 (React 19).
*   **Estilização:** Tailwind CSS v4 com sistema de design focado em energia e modernidade (cores escuras com acentos vibrantes como amarelo neon ou laranja).
*   **Componentes:** Utilização de Shadcn UI para cards, tabelas e formulários.
*   **Backend (Lovable Cloud):**
    *   Tabela `contact_messages` para armazenar envios do formulário.
    *   Tabela `classes` para gerenciar horários de forma dinâmica (opcional, se desejar facilitar atualizações futuras).
*   **SEO:** Metadados personalizados em todas as rotas.

## Etapas de Implementação
1.  **Configuração de Cores e Temas:** Ajustar `src/styles.css` para o estilo "Fitness Moderno".
2.  **Desenvolvimento dos Componentes Base:** Navbar responsiva e Footer.
3.  **Página Inicial:** Layout completo da Home.
4.  **Páginas de Conteúdo:** Criar as rotas e componentes para Modalidades, Horários e Galeria.
5.  **Funcionalidade de Contato:** Criar a página de contato e integrar o formulário com o Lovable Cloud via server function.
6.  **Refinamento e SEO:** Ajustar responsividade final e adicionar tags de SEO.

Irei prosseguir com a ativação do Lovable Cloud para suportar a persistência de dados.
