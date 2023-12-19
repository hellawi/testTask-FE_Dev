import AsideMenu from "./components/AsideMenu/AsideMenu";
import ResponsibleHeader from "./components/ResponsibleHeader/ResponsibleHeader";
import BasicTable from "./components/Table/Table";
import ResponsibleMain from "./components/ResponsibleMain/ResponsibleMain";

function App() {
  return (
    <div>
      <AsideMenu />
      <ResponsibleHeader />
      <main>
        <h1 className="greetings">Hello, Evano👋🏽</h1>
        {/* responsible block */}
        <ResponsibleMain />
        <BasicTable />
      </main>
    </div>
  );
}
export default App;
