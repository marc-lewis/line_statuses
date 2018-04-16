<style lang="sass" src="line-statuses.scss"></style>

<template>

    <ul class="line_statuses">

        <li v-for="(line, index) in lineStatuses"
            :key="line.id">

            <line-status
                :id="line.id"
                :name="line.name"
                :status="line.lineStatuses[0].statusSeverityDescription"
                :index="index">
            </line-status>

        </li>

    </ul>

</template>

<script>

import axios from 'axios';
import LineStatus from '../line-status/line-status.vue';

export default {

    data: function () {

        return {

            TFL_APPLICATION_ID: '{%TFL_APPLICATION_ID%}',
            TFL_APPLICATION_KEY: '{%TFL_APPLICATION_KEY%}',
            lineStatuses: []

        };

    },

    components: {

        LineStatus

    },

    methods: {

        /**
         * Make an AJAX request for the line statuses
         * @param {void}
         * @returns {Object} - A JSON Object containing the response from the ajax call 
         **/
        getLineStatuses () {

            axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/Status',{
                params: {

                    app_id: this.TFL_APPLICATION_ID,
                    app_key: this.TFL_APPLICATION_KEY

                }
            })
                .then((response) => {

                    this.lineStatuses = response.data;

                });

        }

    },

    created () {

        this.getLineStatuses();

    }

}
</script>