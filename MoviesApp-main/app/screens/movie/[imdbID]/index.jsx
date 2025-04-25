import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { searchMovieByIMDBID } from '../../../services/api';
import { useEffect, useState } from 'react';

export default function IMDBID() {
  const params = useLocalSearchParams();

  const [movie, setMovie] = useState();

    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await searchMovieByIMDBID(params.imdbID);
        console.log(results)
  
        setMovie(results || []);
      } catch (error) {
        setMovie()
        setError(error.message || 'Não foi possível carregar os filmes');
        Alert.alert('Erro', error.message || 'Não foi possível carregar os filmes');
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };
  
    useEffect(() => {
      fetchMovie()
    }, [])

  console.log("id:", params.imdbID);

  return (
    <View>
      <Text>id: {movie && movie.Search[0].imdbID}</Text>
      
    </View>
  );
}