import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import AutoCompleteList from './containers/AutoCompleteList';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AutoCompleteList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
