import { Spacer, Text, useTheme } from '@nextui-org/react';
import styles from './NavbarStyles.module.scss';

export const NavbarComponent = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.navbar__container}>
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>
      <Spacer className={styles.navbar__spacer}></Spacer>
      <Text color="white" h5>
        Favorites
      </Text>
    </div>
  );
};
