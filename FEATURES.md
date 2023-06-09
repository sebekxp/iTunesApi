# Player

Due to the inability to stream music directly from this API, it was decided to add something resembling a player (which doesn't actually play😅), but visually imitates one. The player allows us to scroll through albums on the list one by one using arrows. We also have the option to return to the list by clicking the arrow at the top left.

![click](/data/player.png)

The player can be accessed by clicking on a specific album from the list.

![click](/data/click.png)

# More technical features, but worth mentioning

## Dynamic Routes

The system utilizes dynamic segments that are either populated at request time or pre-rendered during compile time. This enables rendering of each album individually, generating a new link upon clicking.

`player` folder was created in the project and a dynamic segment `[slug]` was created in it, which was later replaced by the names of individual album

![slug](/data/slug.png)
![url](/data/url1.png)
![url](/data/url2.png)

## Composing children as components

The approach of composing children as components, instead of passing a large number of props, is a popular pattern in the React library known as the "Composition" or "Compound Components" pattern. It is a superior approach compared to the traditional method of passing a large number of props because it allows for more modular and readable components.

This approach was used in the project and it was used in several places:

```TypeScript
 <Card href={...}>
   <Card.Image src={'...'} alt={'...'} />
   <Card.Body>
     <Card.Title title={'...'} />
     <Card.Subtitle subtitle={'...'} />
     <Card.Description text={'...'} />
     <Card.Description text={'...'} />
   </Card.Body>
 </Card>
```

In the example provided above, the Card component is composed of several smaller components such as Card.Body, Card.Image, Card.Description, Card.Subtitle, and Card.Title. Instead of passing all the properties as props to the Card component, we can nest these smaller components as children of the Card component. This enables a more concise and intuitive code structure.

The benefits of this approach are:

- **Better** code organization: Components are divided into smaller units, making it easier to understand their functionality and enabling better code organization.

- **Reusability**: By breaking down components into smaller ones, they can be easily reused in other parts of the application. For example, Card.Image can be used in various other components where displaying images within a card is needed.

- **Flexibility**: Components can be nested in different configurations, allowing for flexible interface building. We can add, remove, or rearrange individual elements within the Card component while maintaining code coherence and readability.

- **Improved separation of concerns**: Each of the smaller components has its own task and responsibility. This prevents the Card component from being overloaded with too many responsibilities and allows it to focus on managing the overall card layout.

## Why was Next.js chosen instead of React?

### According to what the React team recommends [source](https://react.dev/learn/start-a-new-react-project)

> If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.

A new version of Next.js was used that supports the latest React features such as server and client components. Both types of components are used in this small project.