# React place projects

> Репозиторій для навчання. Кожна гілка — окремий проєкт.

## HELP

- `bugfix/` - ця гілка потрібна для редагування конкретної фічі, тому відштовхуємось від фічі
- `feature/` - ця гіка для конкретної фічі

## Список залежностей

- vite-tsconfig-paths - (це потрібно щоб налаштувати Alias)
- framer motion

## Допоміжні команди

- `git clean -fd` - видалить усі не відслідковувані файли та папки
- `git restore .` - Відміни зміни у відслідковуваних файлах (які вже були додані Git)
- `git reset --hard` - повертає проект до останнього коміта.
- `git reset --hard <commit-id>` - можна вказати

> Ідеально буде зробити git clean -fd + git reset --hard

- git push --all origin
  > Запушити всі гілки на github
- git push origin --delete name-branch
- git push origin name-branch
