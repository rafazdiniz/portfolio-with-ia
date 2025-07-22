#!/bin/bash
# Verifica se a branch atual é a "development"
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "development" ]; then
  echo "Você não está na branch 'development'. Mude para a branch 'development' e execute novamente."
  exit 1
fi
# Verifica se uma mensagem de commit foi fornecida como argumento
if [ -z "$1" ]; then
  echo "Você precisa fornecer uma mensagem de commit."
  exit 1
fi

# Passa a mensagem do commit para a variável
commit_message="$1"

# Adiciona todos os arquivos ao stage
git add .

# Comita as mudanças na branch development com a mensagem fornecida
git commit -m "$commit_message"

# Verifica se a branch atual é a "development"
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "development" ]; then
  echo "Você não está na branch 'development'. Mude para a branch 'development' e execute novamente."
  exit 1
fi

# Faz checkout para a branch main
git checkout main

# Realiza o merge da branch development na branch main
git merge development

# Faz push para todas as branches remotas
git push --all

# Volta para a branch development
git checkout development

echo "Script executado com sucesso!"