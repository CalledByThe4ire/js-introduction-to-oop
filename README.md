Особенность структуры двоичного дерева даёт хороший прирост к эффективности при поиске нужного значения. Для этого нужно, чтобы двоичное дерево было сбалансированным. То есть необходимо построить дерево так, чтобы общее количество узлов в левом и правом поддеревьях было примерно одинаковым для любого узла дерева.

Node.js
-------

Реализуйте метод `isBalanced()`, который проверяет дерево на сбалансированность. Он возвращает `true`, если количество узлов в левом и правом поддеревьях каждого узла отличается не более, чем на 2. В ином случае метод должен вернуть `false`.

*Сбалансированное дерево*

![Сбалансированное двоичное дерево поиска](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6ImIxZDkyY2Y3ZDA2NmE0Y2M1MGM2YmQ0ODdjM2RmOGQ1LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=8d0110eaa19bd8725e8938db6efcf9a827f5958b318fafd580674c1f0fff5f7f)

*Несбалансированное дерево*

![Несбалансированное двоичное дерево поиска](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjAzZGQ5NTFhOTVjMjY3YWUwNTE5MWUzNTBhNDg5ODBiLnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=e0f473701d194e706d7dd7c18cf02cbea012583b6fa5ea7ac85faf249104bfee)

В узле `5` количество узлов в левом поддереве равно 4, а в правом --- 1. Разница составляет 3. Это больше, чем максимально допустимая разница по условию задачи (2).

### Примеры

```
const tree1 = new Node(4,
  new Node(3,
    new Node(2)));

tree1.isBalanced(); // true

const tree2 = new Node(4,
  new Node(3,
    new Node(2,
      new Node(1))));

tree2.isBalanced(); // false
```