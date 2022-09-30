<script>
	import { getUserDetails } from '../../hooks/auth';
	import { store } from '../../hooks/auth';

	let username = '';
	let password = '';
	let error = '';

	async function login() {
		const user = await getUserDetails(username, password);

		if (user) {
			console.log(user);
			$store = user;
			if (error) error = '';
		} else {
			error = 'Incorrect username and password.';
			console.log('Incorrect username and password.');
		}
	}
</script>

<div
	class="relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
>
	<div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
		<div class="m-auto space-y-8 md:w-8/12 lg:">
			<div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
				<div class="p-6 sm:p-16">
					<h2 class="mb-8 text-2xl text-hotpink-400 uppercase font-thin">Login</h2>
					<form
						on:submit|preventDefault={login}
						class="flex mx-auto col-6 text-hotpink-400"
						action=""
					>
						<div class="space-y-2">
							<label for="email" class="text-gray-700">Username</label>
							<input
								type="email"
								class="form-control block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
							focus:ring-2 focus:ring-sky-300 focus:outline-none
							invalid:ring-2 invalid:ring-red-400"
								id="username"
								bind:value={username}
							/>
						</div>

						<div>
							<div class="flex items-center justify-between">
								<label for="pwd" class="text-gray-700">Password</label>
								<button class="p-2 -mr-2" type="reset">
									<span class="text-sm text-sky-500">Forgot your password ?</span>
								</button>
							</div>

							<input
								type="password"
								class="form-control  block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
							focus:ring-2 focus:ring-sky-300 focus:outline-none
							invalid:ring-2 invalid:ring-red-400"
								id="password"
								bind:value={password}
							/>
						</div>

						<button
							type="submit"
							class="w-full py-3 px-6 rounded-md bg-sky-600
                                    focus:bg-sky-700 active:bg-sky-500"
						>
							<span class="text-white">Continue</span>
						</button>
						<div id="error_message" class="text-danger">
							<small>{error}</small>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
