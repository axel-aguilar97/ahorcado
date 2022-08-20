import Routes from './Routes';

import Header from './components/header/Header';
import Silhouette from './components/main/Silhouette';

function App() {
	return (
		<div className="text-bg-dark">
			<div className="cScreen">
				<Header />

				<div className="container text-center cGameScreen" style={{paddingTop: '25px'}}>
					<div className="row justify-content-md-center">
						<div className="col col-4">
							<Silhouette />
						</div>
						<div className="col col-8">
							<Routes />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
