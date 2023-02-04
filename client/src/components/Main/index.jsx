import styles from "./styles.module.css";
import { BiMessageSquareAdd } from 'react-icons/bi';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Logo Here</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<h1>Hello World</h1>
			<BiMessageSquareAdd/>
		</div>
		
	);
};

export default Main;
