<?php

class EntityRankingService {
	
	function __construct() {}
	
	public function rank(&$entities,$max_relative_rank = 3) {
		
		$max_rank = 0;
		
		foreach ($entities as $entity) {
			if ($max_rank < count($entity->accepted_posts))
				$max_rank = count($entity->accepted_posts);
		}
		
		foreach ($entities as $entity) { 
			$entity->relative_rank = intval( (count($entity->accepted_posts)  * $max_relative_rank) / $max_rank ); 
		}
		
		return $entities;
	} 
	
}

?>