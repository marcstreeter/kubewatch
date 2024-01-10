<script lang="ts">
  import Drawer, { AppContent, Content } from "@smui/drawer";
  import List, { Item, Text } from "@smui/list";
  import type { TopAppBarComponentDev } from "@smui/top-app-bar";
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import { Icon } from "@smui/button";

  let topAppBar: TopAppBarComponentDev;
  let open: boolean = false;
</script>

<TopAppBar bind:this={topAppBar} variant="short">
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={() => (open = !open)}
        >menu</IconButton
      >
      <Title>Kube Watch</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton
        aria-label="GitHub"
        href="https://github.com/hperrin/svelte-material-ui"
      >
        <Icon class="material-icons">thumb_up</Icon>
      </IconButton>
      <IconButton aria-label="Demo Site" href="https://sveltematerialui.com">
        <Icon class="material-icons">thumb_down</Icon>
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
<AutoAdjust {topAppBar} style="display: flex; justify-content: space-between;">
  <div class="drawer-container">
    <Drawer variant="dismissible" bind:open>
      <Content>
        <List>
          <Item href="/">
            <Text>News</Text>
          </Item>
          <Item href="/why">
            <Text>Why?</Text>
          </Item>
          <Item href="/contact">
            <Text>Contact</Text>
          </Item>
        </List>
      </Content>
    </Drawer>

    <AppContent class="app-content">
      <main class="main-content">
        <div class="container"><slot /></div>
      </main>
    </AppContent>
  </div>
</AutoAdjust>
