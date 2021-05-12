<template>
  <div class="p-d-flex p-jc-end">
    <Panel
      header="Admin Panel"
      :toggleable="true"
      style="background-color: transparent"
    >
      <div class="p-panel-content">
        <div>
          <Card style="height: 140px">
            <template #content class="p-grid">
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Player Coords"
                  v-model="PlayerCoords"
                  readonly
                />
              </span>
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Player Rotation"
                  v-model="PlayerRotation"
                  readonly
                />
              </span>
            </template>
          </Card>
          <Card>
            <template #content class="p-grid">
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Entity"
                  v-model="Entity"
                  readonly
                />
              </span>
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Entity Coords"
                  v-model="EntityCoords"
                  readonly
                />
              </span>
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Entity Rotation"
                  v-model="EntityRotation"
                  readonly
                />
              </span>
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Entity Model"
                  v-model="EntityModel"
                  readonly
                />
              </span>
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Entity Material"
                  v-model="EntityMaterial"
                  readonly
                />
              </span>
              <span class="p-float-label p-col-12">
                <InputText
                  id="username"
                  type="text"
                  placeholder="Entity Network ID"
                  v-model="EntityNetworkID"
                  readonly
                />
              </span>
            </template>
          </Card>
          <div class="p-panel-footer p-grid p-buttonset">
            <Button
              label="Vector3"
              class="p-col-4 p-button-sm p-button-raised p-button-outlined"
            />
            <Button
              label="Vector4"
              class="p-col-4 p-button-sm p-button-raised p-button-outlined"
            />
            <Button
              label="Table"
              class="p-col-4 p-button-sm p-button-raised p-button-outlined"
            />
          </div>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
import Panel from "primevue/panel";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Button from "primevue/button";
export default {
  name: "App",
  components: {
    Panel: Panel,
    InputText: InputText,
    Card: Card,
    Button: Button,
  },
  data: () => {
    return {
      PlayerCoords: null,
      PlayerRotation: null,
      Entity: null,
      EntityCoords: null,
      EntityRotation: null,
      EntityModel: null,
      EntityMaterial: null,
      EntityNetworkID: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.p-panel {
  background-color: white;
}
</style>
