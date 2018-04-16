<style lang="sass" src="line-status.scss"></style>

<template>

    <div class="line-status"
        :class="[`line-status--${id}`]"
        role="heading"
        aria-level="2"
        :tabindex="index + 1">
        <span class="line-status__name">{{name}}</span><span class="line-status__service-status">{{status}}</span>
    </div>

</template>

<script>

export default {

    props: {
        name: String,
        status: String,
        id: String,
        index: Number
    }

}

</script>