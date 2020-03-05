import { Breadcrumb, Icon } from '@caple-ui/react';

# Breadcrumb

Breadcrumb 컴포넌트는 페이지 내 현재 위치가 어디인지 계층 구조로 표시합니다.

## Examples

Breadcrumb 컴포넌트와 Breadcrumb.Item 컴포넌트로 계층 구조를 표현할 수 있습니다.

```jsx header=기본&nbsp;예제
<>
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>User Profile</Breadcrumb.Item>
    <Breadcrumb.Item>Edit</Breadcrumb.Item>
  </Breadcrumb>
</>
```

텍스트 대신 아이콘으로 표현도 가능합니다.

```jsx header=아이콘&nbsp;사용&nbsp;예제
<>
  <Breadcrumb>
    <Breadcrumb.Item>
      <Icon type="apple" />
    </Breadcrumb.Item>
    <Breadcrumb.Item>User Profile</Breadcrumb.Item>
    <Breadcrumb.Item>Edit</Breadcrumb.Item>
  </Breadcrumb>
</>
```

## Props

### Breadcrumb
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** | Breadcrumb.Item만 허용 | ReactNode | - | true |
| **className** | Breadcrumb에 적용되는 className | string | - | false |
| **style** | Breadcrumb에 적용되는 style | CSSProperties | - | false |

### Breadcrumb.Item
| Name | Description | Type | Default | Required |
|:---:|:---:|:---:|:---:|:---:|
| **children** | 텍스트 혹은 Icon 컴포넌트만 허용 | ReactNode | - | true |
| **href** | Anchor의 href | string | - | false |
| **onClick** | 클릭하면 작동하는 이벤트 | (event: MouseEvent) => void | - | false |
| **className** | Breadcrumb.Item에 적용되는 className | string | - | false |
| **style** | Breadcrumb.Item에 적용되는 style | CSSProperties | - | false |

<style jsx global>{`
  .component-container {
    text-align: center;
  }
`}</style>