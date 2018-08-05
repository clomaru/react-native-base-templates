import { Navigation } from "react-native-navigation";

import SearchRepositoryPage from "./containers/pages/SearchRepositoryPage";
import SagasPostSearchPage from "./containers/pages/SagasPostSearchPage";
import RecomposeCounterPage from "./components/pages/RecomposeCounterPage";
import DetailPage from "./containers/pages/DetailPage";

export default function registerScreens(store: any, Provider: any) {
  Navigation.registerComponent(
    "searchRepository.SearchRepositoryPage",
    () => SearchRepositoryPage,
    store,
    Provider
  );
  Navigation.registerComponent(
    "searchRepository.SagasPostSearchPage",
    () => SagasPostSearchPage,
    store,
    Provider
  );
  Navigation.registerComponent(
    "searchRepository.RecomposeCounterPage",
    () => RecomposeCounterPage,
    store,
    Provider
  );
  Navigation.registerComponent(
    "searchRepository.DetailPage",
    () => DetailPage,
    store,
    Provider
  );
}
