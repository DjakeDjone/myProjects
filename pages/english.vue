<script lang="ts">
import { useBlogStore } from '../stores/blog'
import { useMessagestore } from '~/stores/msg'
export default defineComponent({
    name: 'Glider',
    setup() {
        const blogstore = useBlogStore()
        const msg = useMessagestore()
        definePageMeta({
            title: 'Home',
            description: 'ESP32 Glider is a project to build a rc plane with a ESP32 microcontroller.',
            keywords: 'fri3dl.com, glider, espGlider, esp32Glider, esp32glider',
            _transitionIdx: 1,
            pageTransition: {
                name: 'down',
                mode: 'out-in',
            },
            middleware(to, from) {
                if (!to.meta.pageTransition || (typeof to.meta.pageTransition === 'boolean')) return;
                if (typeof to.meta._transitionIdx !== 'number' || typeof from.meta._transitionIdx !== 'number') return;
                to.meta.pageTransition.name = to.meta._transitionIdx > from.meta._transitionIdx ? 'up' : 'down';

                if (!from.meta.pageTransition || (typeof from.meta.pageTransition === 'boolean')) return;
                if (typeof from.meta._transitionIdx !== 'number' || typeof from.meta._transitionIdx !== 'number') return;
                from.meta.pageTransition.name = to.meta._transitionIdx > from.meta._transitionIdx ? 'up' : 'down';
            }
        })
        return {
            blogstore,
            msg,
        }
    },
    data() {
        return {
            vocabels: [
                {
                    english: 'health',
                    german: 'Gesundheit',
                },
                {
                    english: 'medicine',
                    german: 'Medizin',
                },
                {
                    english: 'rash',
                    german: 'Ausschlag',
                },
                {
                    english: 'bruise',
                    german: 'Prellung',
                },
                {
                    english: 'lump',
                    german: 'Beule',
                },
                {
                    english: 'spots',
                    german: 'Flecken',
                },
                {
                    english: 'a black eye',
                    german: 'ein blaues Auge',
                },
                {
                    english: 'a cold',
                    german: 'eine Erkältung',
                },
                {
                    english: 'a cough',
                    german: 'ein Husten',
                },
                {
                    english: 'a score throat',
                    german: 'Halsschmerzen',
                },
                {
                    english: 'a temperature',
                    german: 'Fieber',
                },
                {
                    english: 'a stomach ache',
                    german: 'Bauchschmerzen',
                },
                {
                    english: 'chest pains',
                    german: 'Brustschmerzen',
                },
                {
                    english: 'earache',
                    german: 'Ohrenschmerzen',
                },
                {
                    english: 'a rash',
                    german: 'ein Ausschlag',
                },
                {
                    english: 'a lump',
                    german: 'eine Beule',
                },
                {
                    english: 'indigestion',
                    german: 'Verdauungsstörungen',
                },
                {
                    english: 'sickness and diarrhoea',
                    german: 'Übelkeit und Durchfall',
                },
                {
                    english: 'sunburn',
                    german: 'Sonnenbrand',
                },
                {
                    english: 'painful joints',
                    german: 'schmerzende Gelenke',
                },
                {
                    english: 'blister',
                    german: 'Blase',
                },
                {
                    english: 'feel sick',
                    german: 'sich übel fühlen',
                },
                {
                    english: 'feel dizzy',
                    german: 'sich schwindlig fühlen',
                },
                {
                    english: 'constipated',
                    german: 'verstopft',
                }, 
                {
                    english: 'flu',
                    german: 'Grippe',
                },
                {
                    english: 'chickenpox',
                    german: 'Windpocken',
                },
                {
                    english: 'mumps',
                    german: 'Mumps',
                },
                {
                    english: 'pneumonia',
                    german: 'Lungenentzündung',
                },
                {
                    english: 'rheumatism',
                    german: 'Rheuma',
                },
                {
                    english: 'an ulcer',
                    german: 'ein Geschwür',
                },
                {
                    english: 'a virus',
                    german: 'ein Virus',
                },
                {
                    english: 'a bug',
                    german: 'ein Virus',
                },
                {
                    english: 'something thats going around',
                    german: 'ein Virus',
                },
                {
                    english: 'broke your wrist',
                    german: 'das Handgelenk gebrochen',
                },
                {
                    english: 'sprained/dislocated your ankle',
                    german: 'den Knöchel verstaucht/ausgerenkt',
                },
                {
                    english: 'pregnant',
                    german: 'schwanger',
                },
                {
                    english: 'hypocondriac',
                    german: 'Hypochonder',
                },
                {
                    english: 'lung cancer',
                    german: 'Lungenkrebs',
                },
                {
                    english: 'brain haemorrhage',
                    german: 'Gehirnblutung',
                },
                {
                    english: 'shivery',
                    german: 'schlotterig',
                },
                {
                    english: 'treatment',
                    german: 'Behandlung',
                },
            ],
        }
    },
})
</script>

<template>
    <main>
        <h2>
            This is a page with english vocabels which I have to learn.
        </h2>
        <div class="vocabels">
            <h2>Health and medicine</h2>
            <div class="vocabel" v-for="vocabel in vocabels">
                <div class="english">
                    {{ vocabel.english }}
                </div>
                <span>
                    -
                </span>
                <div class="german">
                    {{ vocabel.german }}
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
.vocabels {
    margin-top: 2rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00000038;
    padding: 1rem;
    border-radius: 1rem;
}

.vocabel {
    max-width: calc(100% - 2rem);
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
}

.english {
    /* margin-right: 1rem; */
    max-width: 100%;
}

.german {
    /* margin-left: 1rem; */
    max-width: 100%;
}
</style>