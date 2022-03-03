# React のライフサイクルについて

## 目次

1. [React の状態の種類](#reactの状態の種類)
2. [各ページのライフサイクルについて](#各ページのライフサイクルについて)
3. [実行時画像](#実行時画像)

- [ソースコード](https://github.com/mmasap/react-lifecycle-sample)

## React の状態の種類

- マウント: DOM として描画されるとき
- 更新: DOM が更新されるとき
- アンマウント: DOM が削除されるとき

## 各ページのライフサイクルについて

### Lifecycle.js

状態が変更された場合に実行したい処理は、useEffect 関数を使用して実行する

```js
useEffect(() => {
  console.log('componentDidMount'); // マウント時に実行される処理

  return () => {
    console.log('componentWillUnmount'); // アンマウント時に実行される処理
  };
}, []); // 第2引数が空配列の場合、初回マウント時のみ実行される

useEffect(() => {
  if (count === 0) return;
  console.log('componentDidUpdate'); // 更新時に実行される処理
}, [count]); // 第2引数に値が設定されている場合、値が更新されたときに更新処理が実行される
```

### Fetch.js

マウント時に非同期処理を呼び出し、レスポンスが帰ってきたら State を更新し、再レンダリングを行う

```js
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data)); // レスポンスが返却されたらstateを更新
}, []); // マウント時のみ実行
```

### Timer.js

マウント時にタイマーをセットし、1 秒ごとにステートを更新している
ステートが更新されるごとに再レンダリングされるが、アンマウントとは異なるため、clearInterval はアンマウント時まで呼ばれない

```js
useEffect(() => {
  interval = setInterval(() => {
    console.log('updateTimer');
    setTimer(new Date()); // ステートを更新
  }, 1000);

  return () => clearInterval(interval); // アンマウント時に呼び出し
}, []);
```

## 処理の流れ

Lifecycle.js mount => Lifecycle.js update => Lifecycle.js unmount => Timer.js update => Timer.js unmoount
![Lifecycle.js mount](./pics/1.png)
![Lifecycle.js update](./pics/2.png)
![Lifecycle.js unmount](./pics/3.png)
![Timer.js update](./pics/4.png)
![Timer.js unmount](./pics/5.png)
