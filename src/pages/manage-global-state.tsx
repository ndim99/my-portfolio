import Container from "@/components/Container";
import {
  FavoritesList,
  favoritesListSourceCode,
} from "@/components/ManageGlobalState/FavoritesTokenList";
import ManageGlobalBox from "@/components/ManageGlobalState/ManageGlobalBox";
import {
  TokenList,
  tokenListSourceCode,
} from "@/components/ManageGlobalState/TokenList";
import {
  TokenProvider,
  tokenProviderSourceCode,
} from "@/providers/TokenProvider";
import React from "react";

export default function ManageGlobalState() {
  return (
    <TokenProvider>
      <Container>
        <p className="font-semibold fontSizeFrom2xl text-primary-colors text-center 2xl:gap-5 lg:gap-4 gap-3">
          Managing Global State with useContext
        </p>
        <div className="flex 2xl:flex-row flex-col 2xl:gap-2 lg:gap-4 gap-3 w-full">
          <ManageGlobalBox
            title={"Token Context Provider"}
            explanationText={
              "The Context Provider is used to manage and share state across multiple components without the need for prop drilling. It allows for a more organized and scalable architecture, especially in larger applications where multiple components rely on the same data. By centralizing state management, the Context Provider makes the code cleaner, reduces repetition, and simplifies updates. It also improves maintainability, as changes to the state logic only need to be made in one place, not across multiple components."
            }
            exampleText={
              "Below is the source code for the Token Context Provider, demonstrating how to manage shared state using context, load stored data from localStorage, and update it whenever the user adds or removes a favorite token."
            }
            codeForSnippet={tokenProviderSourceCode}
          />
          <ManageGlobalBox
            title={"Token List Component"}
            explanationText={
              "The Token List Component is used to display a list of tokens (like Bitcoin, Ethereum, and Solana). It provides users with the option to add tokens to their favorites, showcasing how shared state can be managed using a Context Provider. This component demonstrates how to efficiently handle user interactions by allowing users to add tokens to a favorites list."
            }
            exampleText={
              "Below is the source code for the Token List Component, which demonstrates how to display a token list, manage user favorites, and prevent duplicate entries."
            }
            codeForSnippet={tokenListSourceCode}
          >
            <TokenList />
          </ManageGlobalBox>
          <ManageGlobalBox
            title={"Favorites List Component"}
            explanationText={
              "The Favorites List Component allows users to view and manage their favorite tokens in one central location. This improves user experience by providing easy access to a personalized list of tokens. By utilizing a Context Provider, we ensure that the favorites list is accessible across multiple components, promoting a scalable and maintainable architecture. This approach avoids prop drilling, making the component tree simpler and cleaner."
            }
            exampleText={
              "Below is the source code for the Favorites List Component, which demonstrates how to retrieve and display a list of favorite tokens."
            }
            codeForSnippet={favoritesListSourceCode}
          >
            <FavoritesList />
          </ManageGlobalBox>
        </div>
      </Container>
    </TokenProvider>
  );
}
