import { Layout, Menu, Breadcrumb, BreadcrumbItem } from "ant-design-vue";
import { FunctionalComponent } from "vue";
import styles from "./index.less";

const LayoutHeader = Layout.Header;

const LayoutComponent: FunctionalComponent<{ name: string }> = (
  props,
  context
) => {
  return (
    <Layout class={styles.layout}>
      <LayoutHeader>
        <div class={styles.logo}></div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </LayoutHeader>
      <Layout>
        <Layout.Sider class={styles.sider}>
          <Menu mode="inline">
            <Menu.Item key="1">1</Menu.Item>
            <Menu.Item key="2">2</Menu.Item>
            <Menu.Item key="3">3</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout style={{ padding: "0px 24px" }}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Layout.Content>121212</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
