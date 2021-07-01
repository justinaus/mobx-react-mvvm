# mobx-react-mvvm

- View
- ViewController: has access to the ViewModel and handles user input
- ViewModel: has access to the Model and handles business logic
- Model


![Pattern](https://miro.medium.com/max/700/1*bK0LyLEHirleo1xcPDUq-w.png)

Inspired by [Level up your React architecture with MVVM](https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21)

## Usage

```sh
yarn install

yarn start
```

## 장단점

### 장점

- View와 Model 사이의 의존성이 없다.
- View와 비즈니스 로직의 분리.
- 각 부분이 독립적이다. 재사용성.

### 단점

- 간단한 UI일 경우 MVVM이 과도할 수 있다.
- ViewModel 설계가 어렵다.
