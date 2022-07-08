<script>
    function toggle() {
        window.document.body.classList.toggle('dark')
    }
</script>


<div class="container">
    <div class="toggler">
        <slot/>
        <label id="switch" class="switch">
            <input on:click={toggle} type="checkbox" id="slider">
            <span class="slider round"></span>
        </label>
    </div>
</div>

<style>

    /* toggle css */

    .switch {
    /* position:absolute; */
    display: inline-block;
    width: 4rem;
    height: 2rem;
    top:50%;
    left:50%;
    transform:translate(100%, 20%);
    }

    /* Hide default HTML checkbox */
    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f3f4f6;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 110%;
    width: 60%;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background:  #356abc url('https://i.ibb.co/7JfqXxB/sunny.png');

    background-repeat: no-repeat;
    background-position: center;
    }

    input:checked + .slider {
    background-color: #1e293b;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #1e293b;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(70%);
    -ms-transform: translateX(70%);
    transform: translateX(70%);
    background: #356abc url('https://i.ibb.co/FxzBYR9/night.png');
    background-repeat: no-repeat;
    background-position: center;
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 50px;
    }

    .slider.round:before {
    border-radius: 50%;
    }

    :global(body) {
		transition: background-color 0.3s
	}
	:global(body.dark) {
		background-color: #0f172a;
		color: #bfc2c7;
        transition: background-color 0.3s
	}

    @media screen and (max-width: 640px) {
        .switch {
            transform:translate(20%, 20%);
        }
    }
</style>