import { TriangleDownIcon, TriangleRightIcon } from "@radix-ui/react-icons";

function ListButton({ id, openLists, onClick }) {
  if (openLists[id]) {
    switch (id) {
      case "myproducts":
        return (
          <button onClick={onClick} id={id}>
            My Products <TriangleDownIcon id={id} />
          </button>
        );
      case "commproducts":
        return (
          <button onClick={onClick} id={id}>
            Community's Products <TriangleDownIcon id={id} />
          </button>
        );
      case "mycommunities":
        return (
          <button onClick={onClick} id={id}>
            My Communities <TriangleDownIcon id={id} />
          </button>
        );
      case "watchlist":
        return (
          <button onClick={onClick} id={id}>
            Watchlist <TriangleDownIcon id={id} />
          </button>
        );
    }
  } else {
    switch (id) {
      case "myproducts":
        return (
          <button onClick={onClick} id={id}>
            My Products <TriangleRightIcon id={id} />
          </button>
        );
      case "commproducts":
        return (
          <button onClick={onClick} id={id}>
            Community's Products <TriangleRightIcon id={id} />
          </button>
        );
      case "mycommunities":
        return (
          <button onClick={onClick} id={id}>
            My Communities <TriangleRightIcon id={id} />
          </button>
        );
      case "watchlist":
        return (
          <button onClick={onClick} id={id}>
            Watchlist <TriangleRightIcon id={id} />
          </button>
        );
    }
  }
}

export default ListButton;
