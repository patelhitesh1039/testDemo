<template>
  <div class="boddy">
    <MainPage>
        <TempleHeader />
        <LeftButton />
        <TempleGate />
        <TempleGanti/>
        <TempleBackground/>
        <TempleBethak/>
        <TempleThali/>
        <TempleNavigation/>
      </MainPage>


    </div>
</template>
<script>
import TempleHeader from '../components/header.vue'
import MainPage from '../components/MainPage.vue'

import LeftButton from '../components/LeftButton.vue'
import TempleGate from '../components/TmpleGate.vue'
import TempleGanti from '../components/TempleGanti.vue'
import TempleBackground from '../components/TempleBackgound.vue'
import TempleBethak from '../components/TempleBethak.vue'
import TempleThali from '../components/TempleThali.vue'
import TempleNavigation from '../components/TempleNavigation.vue'

export default {
  name: 'TempleIndex',
  props: {
    msg: String
  },
  components: {
    MainPage,
    TempleHeader,
    LeftButton,
    TempleGate,
    TempleGanti,
    TempleBackground,
    TempleBethak,
    TempleThali,
    TempleNavigation
  }
}
</script>
<style scoped>
.boddy {
        margin: 0;
        padding: 0;
        width : 90%;
  }

</style>
