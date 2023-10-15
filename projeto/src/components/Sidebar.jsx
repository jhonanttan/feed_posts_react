import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}> 
            <img className={styles.cover} 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=40" 
                    alt="banner" 
            />
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/108599288?v=4" alt="Imagem de perfil" />
                <strong>Jhonanttan</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>
            </footer>
       
        </aside>
    );
}